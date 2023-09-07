import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
        :root {
            --color-color-primary: #27ae60ff;
            --color-color-secondary: #eb5757ff;
            --color-grey-600: #333333ff;
            --color-grey-400: #828282ff;
            --color-grey-300: #c4c4c4;
            --color-grey-200: #e0e0e0ff;
            --color-grey-100: #F5F5F5;
            --color-white: #ffffff;
            --color-negative: #e60000ff;
            --color-warning: #ffcd07ff;
            --color-sucess: #168821ff;
            --color-information: #155bcbff;

            --font-weight-1: 700;
            --font-weight-2: 600;
            --font-weight-3: 400;

            --font-size-1: 1.125rem;
            --font-size-2: 1rem;
            --font-size-3: .875rem;
            --font-size-4: .75rem;

            --font-family: 'Inter', sans-serif;
        
        }
        body{
            background-color: var(--color-white);
        }
        .products__section{
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 1rem;
        }

`