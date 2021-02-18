import ArticleAuthor from "./ArticleAuthor";
import Comments from "../Comments";
import featuredImage from "../../assets/images/temp/cameras.jpeg";
import sonyImg from "../../assets/images/sony_zv1.jpg";

function PostDetails({id, title, body, dateCreated, authorFirstname, authorLastname, authorTeam}) {
    return (
        <>
        <section className="article">
            <div className="container">
                <figure className="article__hero-img">
                    <img src={featuredImage} alt="hero" />
                    <figcaption>Photo by Camera Man</figcaption>
                </figure>
                <div className="article__info">
                    <h1>The 5 Best Compact Digital Cameras for Capturing Your Adventures</h1>
                    <p className="article__info-posted">
                        <span className="article__info-posted-date">January 14, 2021 08:00 AM</span>
                    </p>
                </div>
                <div className="article__rte">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id diam ligula. 
                        Sed porta ac quam eu vestibulum. Maecenas aliquam condimentum augue, non feugiat metus dignissim eu. 
                        Quisque vel urna id quam porta pulvinar. Sed quis malesuada nulla. Phasellus at sodales risus, ut commodo neque. 
                        Suspendisse hendrerit arcu ut quam elementum, sit amet consectetur velit tincidunt. 
                        Vestibulum nec nibh pellentesque sapien volutpat porta. Nam ullamcorper nunc ex, et aliquet magna pretium sit amet. 
                        Pellentesque tincidunt vitae arcu ut maximus.
                    </p>
                    <h2>1. Digital Camera ZV-1</h2>
                    <p>
                        <img src={sonyImg} alt="Sony ZV1"/>
                        The ZV-1 is designed for casual videography with a selfie-friendly vari-angle LCD screen, body grip and a recording lamp. 
                        A directional 3-capsule mic with wind screen picks up your voice clearly with less wind noise; 
                        and the Bokeh switch and Product Showcase Setting make videos more interesting with less effort.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id diam ligula. 
                        Sed porta ac quam eu vestibulum. Maecenas aliquam condimentum augue, non feugiat metus dignissim eu. 
                        Quisque vel urna id quam porta pulvinar. Sed quis malesuada nulla. Phasellus at sodales risus, ut commodo neque.
                        <br/><br/>
                        Suspendisse hendrerit arcu ut quam elementum, sit amet consectetur velit tincidunt. 
                        Vestibulum nec nibh pellentesque sapien volutpat porta. Nam ullamcorper nunc ex, et aliquet magna pretium sit amet. 
                        Pellentesque tincidunt vitae arcu ut maximus.
                        Integer congue turpis augue, eget pellentesque ante pulvinar sit amet. Aliquam erat volutpat. 
                        Fusce consectetur blandit purus. Maecenas aliquam erat sit amet vehicula maximus.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Designed for casual videography</li>
                        <li>Fast and precise focus transitions</li>
                        <li>Product Showcase Setting, ideal to highlight your favourite things</li>
                        <li>Shoot great video, wherever you go</li>
                        <li>Lightweight, compact, easy to use</li>
                    </ul>
                    <h3>Specifications</h3>
                    <ul>
                        <li>Large 1.0-type Exmor RS CMOS image sensor</li>
                        <li>BIONZ XTM image processing engine</li>
                        <li>4K movie recording</li>
                        <li>Directional three-capsule mic with wind screen</li>
                        <li>Vari-angle LCD screen, body grip, and recording lamp</li>
                    </ul>
                    <h2>2. Nikon DL24-85 f/1.8-2.8 Compact Camera</h2>
                    <p>
                        <img src={sonyImg} alt="Nikon"/>
                        The ZV-1 is designed for casual videography with a selfie-friendly vari-angle LCD screen, body grip and a recording lamp. 
                        A directional 3-capsule mic with wind screen picks up your voice clearly with less wind noise; 
                        and the Bokeh switch and Product Showcase Setting make videos more interesting with less effort.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id diam ligula. 
                        Sed porta ac quam eu vestibulum. Maecenas aliquam condimentum augue, non feugiat metus dignissim eu. 
                        Quisque vel urna id quam porta pulvinar. Sed quis malesuada nulla. Phasellus at sodales risus, ut commodo neque.
                        <br/><br/>
                        Suspendisse hendrerit arcu ut quam elementum, sit amet consectetur velit tincidunt. 
                        Vestibulum nec nibh pellentesque sapien volutpat porta. Nam ullamcorper nunc ex, et aliquet magna pretium sit amet. 
                        Pellentesque tincidunt vitae arcu ut maximus.
                        Integer congue turpis augue, eget pellentesque ante pulvinar sit amet. Aliquam erat volutpat. 
                        Fusce consectetur blandit purus. Maecenas aliquam erat sit amet vehicula maximus.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Designed for casual videography</li>
                        <li>Fast and precise focus transitions</li>
                        <li>Product Showcase Setting, ideal to highlight your favourite things</li>
                        <li>Shoot great video, wherever you go</li>
                        <li>Lightweight, compact, easy to use</li>
                    </ul>
                    <h3>Specifications</h3>
                    <ul>
                        <li>Large 1.0-type Exmor RS CMOS image sensor</li>
                        <li>BIONZ XTM image processing engine</li>
                        <li>4K movie recording</li>
                        <li>Directional three-capsule mic with wind screen</li>
                        <li>Vari-angle LCD screen, body grip, and recording lamp</li>
                    </ul>
                    <h2>3. Nikon DL24-85 f/1.8-2.8 Compact Camera</h2>
                    <p>
                        <img src={sonyImg} alt="Nikon"/>
                        The ZV-1 is designed for casual videography with a selfie-friendly vari-angle LCD screen, body grip and a recording lamp. 
                        A directional 3-capsule mic with wind screen picks up your voice clearly with less wind noise; 
                        and the Bokeh switch and Product Showcase Setting make videos more interesting with less effort.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id diam ligula. 
                        Sed porta ac quam eu vestibulum. Maecenas aliquam condimentum augue, non feugiat metus dignissim eu. 
                        Quisque vel urna id quam porta pulvinar. Sed quis malesuada nulla. Phasellus at sodales risus, ut commodo neque.
                        <br/><br/>
                        Suspendisse hendrerit arcu ut quam elementum, sit amet consectetur velit tincidunt. 
                        Vestibulum nec nibh pellentesque sapien volutpat porta. Nam ullamcorper nunc ex, et aliquet magna pretium sit amet. 
                        Pellentesque tincidunt vitae arcu ut maximus.
                        Integer congue turpis augue, eget pellentesque ante pulvinar sit amet. Aliquam erat volutpat. 
                        Fusce consectetur blandit purus. Maecenas aliquam erat sit amet vehicula maximus.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Designed for casual videography</li>
                        <li>Fast and precise focus transitions</li>
                        <li>Product Showcase Setting, ideal to highlight your favourite things</li>
                        <li>Shoot great video, wherever you go</li>
                        <li>Lightweight, compact, easy to use</li>
                    </ul>
                    <h3>Specifications</h3>
                    <ul>
                        <li>Large 1.0-type Exmor RS CMOS image sensor</li>
                        <li>BIONZ XTM image processing engine</li>
                        <li>4K movie recording</li>
                        <li>Directional three-capsule mic with wind screen</li>
                        <li>Vari-angle LCD screen, body grip, and recording lamp</li>
                    </ul>
                    <h2>4. Nikon DL24-85 f/1.8-2.8 Compact Camera</h2>
                    <p>
                        <img src={sonyImg} alt="Nikon"/>
                        The ZV-1 is designed for casual videography with a selfie-friendly vari-angle LCD screen, body grip and a recording lamp. 
                        A directional 3-capsule mic with wind screen picks up your voice clearly with less wind noise; 
                        and the Bokeh switch and Product Showcase Setting make videos more interesting with less effort.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id diam ligula. 
                        Sed porta ac quam eu vestibulum. Maecenas aliquam condimentum augue, non feugiat metus dignissim eu. 
                        Quisque vel urna id quam porta pulvinar. Sed quis malesuada nulla. Phasellus at sodales risus, ut commodo neque.
                        <br/><br/>
                        Suspendisse hendrerit arcu ut quam elementum, sit amet consectetur velit tincidunt. 
                        Vestibulum nec nibh pellentesque sapien volutpat porta. Nam ullamcorper nunc ex, et aliquet magna pretium sit amet. 
                        Pellentesque tincidunt vitae arcu ut maximus.
                        Integer congue turpis augue, eget pellentesque ante pulvinar sit amet. Aliquam erat volutpat. 
                        Fusce consectetur blandit purus. Maecenas aliquam erat sit amet vehicula maximus.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Designed for casual videography</li>
                        <li>Fast and precise focus transitions</li>
                        <li>Product Showcase Setting, ideal to highlight your favourite things</li>
                        <li>Shoot great video, wherever you go</li>
                        <li>Lightweight, compact, easy to use</li>
                    </ul>
                    <h3>Specifications</h3>
                    <ul>
                        <li>Large 1.0-type Exmor RS CMOS image sensor</li>
                        <li>BIONZ XTM image processing engine</li>
                        <li>4K movie recording</li>
                        <li>Directional three-capsule mic with wind screen</li>
                        <li>Vari-angle LCD screen, body grip, and recording lamp</li>
                    </ul>
                    <h2>5. Nikon DL24-85 f/1.8-2.8 Compact Camera</h2>
                    <p>
                        <img src={sonyImg} alt="Nikon"/>
                        The ZV-1 is designed for casual videography with a selfie-friendly vari-angle LCD screen, body grip and a recording lamp. 
                        A directional 3-capsule mic with wind screen picks up your voice clearly with less wind noise; 
                        and the Bokeh switch and Product Showcase Setting make videos more interesting with less effort.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id diam ligula. 
                        Sed porta ac quam eu vestibulum. Maecenas aliquam condimentum augue, non feugiat metus dignissim eu. 
                        Quisque vel urna id quam porta pulvinar. Sed quis malesuada nulla. Phasellus at sodales risus, ut commodo neque.
                        <br/><br/>
                        Suspendisse hendrerit arcu ut quam elementum, sit amet consectetur velit tincidunt. 
                        Vestibulum nec nibh pellentesque sapien volutpat porta. Nam ullamcorper nunc ex, et aliquet magna pretium sit amet. 
                        Pellentesque tincidunt vitae arcu ut maximus.
                        Integer congue turpis augue, eget pellentesque ante pulvinar sit amet. Aliquam erat volutpat. 
                        Fusce consectetur blandit purus. Maecenas aliquam erat sit amet vehicula maximus.
                    </p>
                    <h3>Features</h3>
                    <ul>
                        <li>Designed for casual videography</li>
                        <li>Fast and precise focus transitions</li>
                        <li>Product Showcase Setting, ideal to highlight your favourite things</li>
                        <li>Shoot great video, wherever you go</li>
                        <li>Lightweight, compact, easy to use</li>
                    </ul>
                    <h3>Specifications</h3>
                    <ul>
                        <li>Large 1.0-type Exmor RS CMOS image sensor</li>
                        <li>BIONZ XTM image processing engine</li>
                        <li>4K movie recording</li>
                        <li>Directional three-capsule mic with wind screen</li>
                        <li>Vari-angle LCD screen, body grip, and recording lamp</li>
                    </ul>
                </div>
                <ArticleAuthor />
            </div>
        </section>
        <Comments />
        </>
    )
}

export default PostDetails;
