import {useEffect} from 'react';
import { defaultTitle } from '../pages/Home';

 export const useDocumentTitle = (title:string) => {

    useEffect(() => {
        title?document.title = title: defaultTitle
    },[title])
}