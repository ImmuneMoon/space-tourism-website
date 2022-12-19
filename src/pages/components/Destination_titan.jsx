import React from 'react';
import styled from 'styled-components';
import titan from './assets/destination/image-titan.png';


const Dest_container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 12.3rem;
    margin-left: 14rem;
`

const Planet = styled.div`
    margin: 0;
    width: 425px;
    height: 425px;
    position: relative;
    border-radius: 50%;
    background-color: black;
    overflow: hidden;
`

let Dest_img = styled.img`
    width: 425px;
    height: 425px;
`

const Shadow = styled.div`
    margin: 0;
    width: 850px;
    height: 850px;
    position: absolute;
    background-color: black;
    border-radius: 50%;
    transform: translateX(.6rem) translateY(-22.75rem);
`

const Info = styled.div`
    width: 27rem;
    margin-bottom: 8rem;
`

let Title = styled.h2`
    font-size: 100px;
    font-weight: 500;
    margin: 3rem 0 0 0;
`

let Subtext = styled.p`
    width: 27.25rem;
    color: #D0D6F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    margin: .15rem 0 3.5rem 0;
`

const Line = styled.div`
    border: .5px solid rgba(128, 128, 128, 0.548);
`

let Travel = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0 0 0;
`

const Distance = styled.div`
    margin: 0;
`

const Dist_title = styled.h3`
    font-weight: 400;
    font-size: 14px;
    color: #D0D6F9;
    margin: 0;
`

let Avg_dist = styled.p`
    font-size: 28px;
    margin: .75rem 0 0 0;
    font-weight: 500;
`

const Time = styled.div`
    margin: 0 5rem 0 0;
`

const Time_title = styled.h3`
    font-weight: 400;
    font-size: 14px;
    color: #D0D6F9;
    margin: 0;
`

const Est_time = styled.p`
    font-size: 28px;
    margin: .75rem 0 0 0;
    font-weight: 500;
`

function location() {
    return(
        <>
            <Dest_container>
                <Planet>
                    <Dest_img src={titan} alt="Titan" />
                    <Shadow></Shadow>
                </Planet>
                <Info>
                    <Title>TITAN</Title>
                    <Subtext>
                        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </Subtext>
                    <Line></Line>
                    <Travel>
                        <Distance>
                            <Dist_title>
                                AVG. DISTANCE
                            </Dist_title>
                            <Avg_dist>
                                1.6 BIL. KM
                            </Avg_dist>
                        </Distance>
                        <Time>
                            <Time_title>
                                EST. TRAVEL TIME
                            </Time_title>
                            <Est_time>
                                7 YEARS
                            </Est_time>
                        </Time>
                    </Travel>
                </Info>
            </Dest_container>
        </>
    );
}

export default location;