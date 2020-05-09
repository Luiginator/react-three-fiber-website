import React from "react";
import styled from "styled-components";

type TStepTwoProps = {
  readonly onGeometryChange: (geometry: string) => void;
  readonly onMaterialChange: (material: string) => void;
};

export default function StepTwo({
  onGeometryChange,
  onMaterialChange,
}: TStepTwoProps) {
  const handleChangeGeometry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onGeometryChange(e.target.value);
  };

  const handleChangeMaterial = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onMaterialChange(e.target.value);
  };

  return (
    <div>
      Let's make a re-usable{" "}
      <Select onChange={handleChangeGeometry}>
        <option value="box">Box</option>
        <option value="cylinder">Cylinder</option>
      </Select>
      component that has it's own state, reacts to user-input and participates
      in the render-loop. As a material we use the
      <Select onChange={handleChangeMaterial}>
        <option value="meshStandardMaterial">Standard Material</option>
        <option value="meshBasicMaterial">Basic Material</option>
        <option value="meshPhysicalMaterial">Physical Material</option>
        <option value="meshPhongMaterial">Phong Material</option>
      </Select>
    </div>
  );
}

const Select = styled.select`
  font-size: 16px;
  margin: 0 5px;

  &:focus {
    border: none;
  }
`;
