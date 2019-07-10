import {css} from 'styled-components';


const sizes = {
    desktopL : 4096,
    desktopM: 2560,
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




