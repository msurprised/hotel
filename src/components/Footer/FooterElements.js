import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
`;

export const TopFooter = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    border: 1px solid #7587A0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const InfoFooter = styled.div`
    padding: 44px;
`;

export const FooterP = styled.p`
    font-family: 'Average Sans';
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #A9A9A9;
    margin-top: 10px;
`;

export const ContactFooter = styled.div`
    padding: 44px;
`;

export const FooterH2 = styled.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    padding-bottom: 20px;
    color: #131313;
`;

export const FooterContacts = styled.ul`
    
`;

export const FooterContact = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding-bottom: 13px;
    color: #7587A0;
`;

export const FooterAdress = styled.address`
    font-family: 'Average Sans';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #A9A9A9;
`;

export const FooterTel = styled.a`
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #A9A9A9;
    text-decoration: none;
`;

export const SocialFooter = styled.div`
    padding: 44px;
`;

export const SocialNets = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100px;
    justify-content: space-between;
`;

export const SocialNet = styled.li`
    list-style: none;
    color: #7587A0;
`;

export const BottomFooterWrap = styled.div`
    background: #B1BED0;
    width: 100%;
    height: 60px;
    margin-top: 77px;
`;

export const BottomFooter = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`;

export const Org = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.42);

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const OtherInfo = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const Info = styled.li`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.42);
    list-style: none;
    padding-left: 15px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;