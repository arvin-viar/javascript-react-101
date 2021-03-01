import styled from "styled-components";
import bannerBgImg from "../../assets/images/Greatest-NBA-Players-Best-NBA-Players-Ranking-NBA-Players-NBA-Goat.-Who-Is-The-Best-Player-Ever-5x8.jpg";

const CategoryBannerWrap = styled.header`
    position: relative;
    height: 250px;
    color: #ffffff;
    background: url(${bannerBgImg}) no-repeat center center;
    background-size: cover;
    & > .container {
        height: inherit;
    }
    &::before {
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
    }
    .categories__header-wrap {
        position: relative;
        height: 100%;
    }
    .categories__header-content {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        padding: 0 15px;
        color: #ffffff;
        text-align: center;
        h1 {
            margin-bottom: 15px;
            font-size: 3em;
            text-transform: uppercase;
        }
    }
    @media (min-width: 768px) {
        height: 350px;
    }
`

function CategoryBanner() {
    return (
        <CategoryBannerWrap>
            <div className="container">
                <div className="categories__header-wrap">
                    <div className="categories__header-content">
                        <h1 className="title">Top Stories</h1>
                        <p className="description">
                            Suspendisse congue at nisl id sagittis. Etiam purus odio, pharetra vitae dui finibus,
                            laoreet dignissim libero.
                            Nunc hendrerit eros at gravida vehicula. Morbi molestie diam at sollicitudin porttitor.
                        </p>
                    </div>
                </div>
            </div>
        </CategoryBannerWrap>
    )
}

export default CategoryBanner;
