import Head from "next/head";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/component/layout";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Park GHO Family</title>
        <meta name="description" content="Aspiring Road Safety" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className={styles.banner}>
          <div className={styles.heroSection}>
            <Container>
              <p style={{ fontSize: "25px", fontStyle: "italic" }}>
                <strong>Park GHO Family</strong> Revolutionizing
                Sustainable Mobility & Road Safety
              </p>

              {/* <Button href="#!" target="_blank">Any Button</Button> */}
            </Container>
          </div>
        </div>

        <Container>
          <h1 className="section-heading">Executive Summary</h1>

          <Row>
            <Col className="bot-marg" md="12" lg="6">
              <img src="/img/Park Token Large.png" style={{ width: "100%" }} />
            </Col>
            <Col className="bot-marg" md="12" lg="6">
              <ul>
                <li>
                  <strong>Opportunity:</strong> Enhancing road safety through
                  smarter mobility solutions.
                </li>
                <li>
                  <strong>Problem:</strong> Rising road incidents and the need
                  for early detection and prevention.
                </li>
                <li>
                  <strong>Solution:</strong> Blockchain-based ecosystem focusing
                  on road incidence reduction.
                </li>
                <li>
                  <strong>Core Objectives:</strong>
                  <ul>
                    <li>Decentralized platform for smarter mobility.</li>
                    <li>
                      Integration of advanced technologies for incident
                      detection and prevention.
                    </li>
                    <li>Community-driven approach to improving road safety.</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>

          <Col className="bot-marg" md="12" lg="12">
            <h1 className="section-heading">Target Market</h1>

            <img
              src="/img/Group 11.png"
              style={{ width: "100%", borderRadius: "20px" }}
              alt="awards image"
            />
          </Col>
        </Container>
        {/* Mile wallet intro */}
        <Container>
          <h1 className="section-heading">Pay using Mile wallet</h1>

          <Row>
            <Col className="bot-marg" md="12" lg="6">
              <img src="/img/milewallet.png" style={{ width: "100%" }} />
            </Col>
            <Col className="bot-marg" md="12" lg="6">
              <ul>
                <li>
                  Effortless DeFi and NFT integration for a decentralized
                  financial future.
                </li>
                <li>
                  Securely purchase crypto using credit and debit cards, as well
                  as various crypto assets.
                </li>
                <li>
                  Seamless management of fiat and crypto payment options across
                  desktop and mobile platforms.
                </li>
                <li>
                  User-friendly interface for convenient navigation and control
                  over your digital assets.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        

          <h1 className="section-heading">Vision</h1>  */

          <Row>
           <Col className="bot-marg" md="12" lg="6">
              <img src="/img/Mask group.png" style={{ width: "100%" }} />
            </Col>
            <Col className="bot-marg" md="12" lg="6">
              <h5>
                Our vision is to use blockchain technology to make driving safer
                and monitored for drivers, authorities, as well as other 3rd
                parties. With a mix of hardware and software powered by Ethereum
                blockchain services and IPFS/Filecoin decentralized storage, we
                will provide intelligent feedback about drive quality and help
                analyze past incidents, as well as predict future incidents
              </h5>
            </Col>
          </Row>  */
        </Container>
      </>
    </Layout>
  );
}
