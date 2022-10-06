import React, {useEffect} from 'react';
import CoverLayout from "layouts/authentication/components/CoverLayout";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
    useEffect(()=>{
        const csrf = document.querySelector('meta[name="csrf-token"]').content;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,'X-CSRF-TOKEN': csrf},
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('/logout', requestOptions)
            .then(response => {
                window.location='/';
            })
    },[])
  return (
    <CoverLayout image={bgImage}>

    </CoverLayout>
  );
}

export default Cover;
