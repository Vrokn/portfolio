import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import video1 from '../Videos/jaguar.mp4';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
export default function Jaguar() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 100, friction: 30 } }))

    return (
        <Container className={'Jaguar'} id='jaguar' fluid>
            <Row className="justify-content-md-center">
                <Col md >
                    <Parallax y={[15, -20]}>
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <video className='video' loop autoPlay muted width="100%">
                                <source src={video1} type='video/mp4' />
                            </video>
                        </animated.div>
                    </Parallax>
                </Col>
                <Col md>
                    <Parallax y={[15, -20]}>
                        <a className='refLink' href="https://vrokn.github.io/landingforjaguar/" target="_blank" rel="noopener noreferrer"> Landing for Jaguar </a>
                        <br></br>
                        <p>This is an example of a landing site for the Jaguar XE model.
                            This site was built using only HTML and CSS to observe the transition and style effects that can be achieved with a basic code. </p><br></br>
                    </Parallax>
                </Col>
            </Row>
        </Container>
    )
}