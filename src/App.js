import React, { useState } from 'react';
import { Container, Content, Column, ContainerButtons, ContainerInput } from './styles';
import Input from './components/Input';
import Button from './components/Button';

import { evaluate, pi } from 'mathjs';

import { FaDivide, FaTimes, FaMinus, FaPlus, FaEquals, FaSquareRootAlt, FaPercentage } from 'react-icons/fa'; // Ícones

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  // Adiciona caracteres à expressão
  const handleAddCharacter = (char) => {
    setExpression(prev => prev + char);
  };

  // Substitui vírgula por ponto
  const handleAddComma = () => {
    setExpression(prev => prev + ".");
  };

  const handleEquals = () => {
    try {
      const calculatedResult = evaluate(expression);
      setResult(expression);
      setExpression(calculatedResult.toString()); 
    } catch (error) {
      setResult("Erro");
    }
  };

  // Limpa a tela
  const handleOnClear = () => {
    setExpression("");
    setResult("");
  };

  // Raiz Quadrada
  const handleSqrt = () => {
    setExpression(prev => prev + "sqrt("); // Adiciona "sqrt(" à expressão
  };

  // Exponenciação (base ^ expoente)
  const handleExponentiation = () => {
    setExpression(prev => prev + "^");
  };

  // Porcentagem
  const handlePercentage = () => {
    try {
      const lastNumber = getLastNumber(expression);
      if (lastNumber) {
        const percentageValue = evaluate(`${lastNumber} / 100`);
        setExpression(expression.replace(lastNumber, percentageValue.toString()));
        setResult(percentageValue.toString());
      } else {
        setResult("Erro");
      }
    } catch (error) {
      setResult("Erro");
    }
  };

  // Valor de Pi
  const handlePi = () => {
    setExpression(prev => prev + pi.toFixed(5)); 
  };

  // Operação de módulo (resto da divisão)
  const handleMod = () => {
    setExpression(prev => prev + " % ");
  };

  const getLastNumber = (expr) => {
    const match = expr.match(/(\d+(\.\d+)?)(?!.*\d)/);
    return match ? match[0] : null;
  };

  return (
    <Container>
      <Content>

        <ContainerInput>
          <Input value={result ? `= ${result}` : ""} />
          <Input value={expression || "0"} />
        </ContainerInput>

        <ContainerButtons>
          <Column>
            <Button label="C" onClick={handleOnClear} className="button-clear" />
            <Button label="7" onClick={() => handleAddCharacter("7")} />
            <Button label="4" onClick={() => handleAddCharacter("4")} />
            <Button label="1" onClick={() => handleAddCharacter("1")} />
            <Button label="0" onClick={() => handleAddCharacter("0")} />
          </Column>

          <Column>
            <Button label="(" onClick={() => handleAddCharacter("(")} />
            <Button label="8" onClick={() => handleAddCharacter("8")} />
            <Button label="5" onClick={() => handleAddCharacter("5")} />
            <Button label="2" onClick={() => handleAddCharacter("2")} />
            <Button label="." onClick={handleAddComma} />
          </Column>

          <Column>
            <Button label=")" onClick={() => handleAddCharacter(")")} />
            <Button label="9" onClick={() => handleAddCharacter("9")} />
            <Button label="6" onClick={() => handleAddCharacter("6")} />
            <Button label="3" onClick={() => handleAddCharacter("3")} />
            <Button label={<FaPercentage />} onClick={handlePercentage} />
          </Column>

          <Column>
            <Button label="mod" onClick={handleMod} />
            <Button label={<FaDivide />} onClick={() => handleAddCharacter("/")} />
            <Button label={<FaTimes />} onClick={() => handleAddCharacter("*")} />
            <Button label={<FaMinus />} onClick={() => handleAddCharacter("-")} />
            <Button label={<FaPlus />} onClick={() => handleAddCharacter("+")} />
          </Column>

          <Column>
            <Button label="π" onClick={handlePi} />
            <Button label={<FaSquareRootAlt />} onClick={handleSqrt} />
            <Button label="^" onClick={handleExponentiation} />
            <Button label={<FaEquals />} onClick={handleEquals} className="button-equals" />
          </Column>

        </ContainerButtons>

        
      </Content>
    </Container>
  );
};

export default App;