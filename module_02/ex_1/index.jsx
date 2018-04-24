import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName="Silva">
        <Member name="Felipe" />
        <Member name="Flávia "/>
        <Member name="Miguel "/>
        <Member name="Maria "/>
    </Family>
    , document.getElementById('app')
)