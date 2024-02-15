import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../../static/images/2.jpg'
import img2 from '../../static/images/3.jpg'
import img3 from '../../static/images/4 .jpg'

export const MySlider: React.FC<{}> = () => {

    return <>

        <Carousel>
            <Carousel.Item>
                <img src={img1} width={"100%"} height={'550px'} alt="" />
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} width={"100%"} height={'480px'} alt="" />
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} width={"100%"} height={'480px'} alt="" />
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
}