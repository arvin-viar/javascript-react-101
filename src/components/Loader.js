
import styled from "styled-components";
import loader from "../assets/images/preloader.gif";

const LoaderWrap = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.25);

    .loader {
        margin: 0;
    }
    &.hidden {
        display: none;
    }
`

export function Loader() {
    return (
        <LoaderWrap>
            <img className="loader" src={loader} alt="site loader" />
        </LoaderWrap>
    )
}

export default Loader;
