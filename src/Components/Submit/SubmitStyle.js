import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #698168;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  background-color: #0e220d;
  box-shadow: 2px 4px 8px 2px #87a186;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: red;
  }
`;