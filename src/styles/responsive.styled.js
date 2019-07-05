import {css} from 'styled-components';


const sizes = {
    desktopL : 2500,
    desktopM: 2500,
    tablet: 768,
    phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
    return acc
}, 
{})




