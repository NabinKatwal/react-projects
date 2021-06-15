import React from 'react'
import Button from '@material-ui/core/Button';

export default function Basic() {
    function basicUI(){
        <div>
            
        </div>
    }

    const onClickHandler = (e)=>{
        e.preventDefault()
        basicUI()
    }

    return (
        <Button onClick={onClickHandler} variant="contained" color="secondary">
          Basic
        </Button>
    )
}
