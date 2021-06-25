import React from 'react'
import Button from '@material-ui/core/Button';
import { useState } from 'react'

import './css/Basic.css'

export default function Basic() {
    const [checked, setChecked] = useState(true)

    const onClickHandler = (e)=>{
        setChecked(!checked)
        e.preventDefault()
    }

    return (
        <div>
            <Button onClick={onClickHandler} variant="contained" color="secondary">
            Basic
            </Button>
            {!checked && <div className="btn-clicked">
                <Button variant="contained" color="primary">Add</Button>
                <Button variant="contained" color="primary">Subtract</Button>
                <Button variant="contained" color="primary">Multiply</Button>
                <Button variant="contained" color="primary">Divide</Button>
            </div>}
        </div>
    )
}
