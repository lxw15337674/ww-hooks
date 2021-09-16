import { setState, unionKeys } from '@/common/utils';
import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { SetState } from '../interface';
import useUpdate from '../useUpdate';


interface Config{
  navigateMode:'push'|'replace'
}

export default (initValue?:string | string[][] | Record<string, string> | URLSearchParams,config?:Config) => {
  const [urlState, setUrlState] = useState(() =>{ 
    let init = initValue!==null?initValue:location.search
    return new URLSearchParams(init)
  });

  const stableActions = useMemo(
    () => ({
      set: (key:string, entry:SetState<string>) => {
        setUrlState((prev) => {
          const temp = new URLSearchParams(prev);
          const prevValue = prev.get(key)
          const data = setState<string>(entry,prevValue)
          if(data===undefined){
            temp.delete(key)
          }else{
          temp.set(key, data);
          }
          return temp;
        });
      },
      clear:()=>{
        setUrlState(new URLSearchParams())
      }
    }),
    [urlState, setUrlState],
  );
  useUpdate(()=>{
    const params = urlState.toString()
    if(!params){
      window.history.pushState({}, document.title, window.location.pathname);
      return
    }
    const url = "?"+params;
    if(config?.navigateMode==='push'){
      history.pushState(null,'',url)
    }
    history.replaceState(null,'',url) 
  },[urlState])

  return [urlState, stableActions] as const;
};
