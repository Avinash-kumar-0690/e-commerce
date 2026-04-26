import {useEffect} from 'react';
import { defaultTitle } from '../pages/Home';

// use This component to change the title dynamically

 export const useDocumentTitle = (title:string) => {

    useEffect(() => {
        title?document.title = title: defaultTitle
    },[title])
}