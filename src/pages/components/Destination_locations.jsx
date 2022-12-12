import React from 'react';
import styled from 'styled-components';
import moon from './assets/destination/image-moon.png';
import mars from './assets/destination/image-mars.png';
import europa from './assets/destination/image-europa.png';
import titan from './assets/destination/image-titan.png';

let place = moon;
let name = 'Moon';



const Dest_container = styled.section`
    
`

let Dest_img = styled.img`
    
`

const Info = styled.div`
    
`

let Title = styled.h2`
`

let Subtext = styled.p`
    
`

const Line = styled.div`
    
`

let Travel = styled.div`
    
`

const Distance = styled.div`
    
`

const Dist_title = styled.h3`

`

let Avg_dist = styled.p`
    
`

const Time = styled.div`
    
`

const Time_title = styled.h3`
    
`

const Est_time = styled.p`
    
`

function location() {
    return(
        <>
            <Dest_container>
                <Dest_img src={place} alt={name} />
                <Info>
                    <Title>MOON</Title>
                    <Subtext>
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </Subtext>
                    <Line></Line>
                    <Travel>
                        <Distance>
                            <Dist_title>
                                AVG. DISTANCE
                            </Dist_title>
                            <Avg_dist>

                            </Avg_dist>
                        </Distance>
                        <Time>
                            <Time_title>
                                EST. TRAVEL TIME
                            </Time_title>
                            <Est_time>

                            </Est_time>
                        </Time>
                    </Travel>
                </Info>
            </Dest_container>
        </>
    );
}

export default location;