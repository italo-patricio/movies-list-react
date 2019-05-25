import React from 'react';
import styled from "styled-components";

interface EmptyProp {
    mensagem?: string;
}

const EmptyStyle = styled.div`
  font-family: "Helvetica Neue", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 15px;
`;

const Empty = (props: EmptyProp) => {
    const { mensagem } = props;
    return <EmptyStyle>
        { mensagem || "Nada encontrado!" }
    </EmptyStyle>;
}

export default Empty;