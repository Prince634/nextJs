import styled, { css, injectGlobal } from '@emotion/css'


export const TableStyle = props=>css`
    input{
        background: ${props.bg?props.bg:'#FFF'};
    }
`