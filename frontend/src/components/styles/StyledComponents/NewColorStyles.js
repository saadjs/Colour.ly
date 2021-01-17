import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDiv = styled(motion.div)`
  height: 100%;
  width: 20%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  padding: 10px;
  color: black;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  .trash-icon {
    cursor: pointer;
    background-color: whitesmoke;
    padding: 5px;
  }
  span {
    color: black;
    background-color: whitesmoke;
    padding: 5px;
  }
`;
