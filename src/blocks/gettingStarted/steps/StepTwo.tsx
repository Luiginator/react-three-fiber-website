import React from "react";
import styled from "styled-components";
import { fontSize } from "@styles/typography";

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
      Let's make a re-usable <Label htmlFor="geometry-select">Box</Label>
      <Select id="geometry-select" onChange={handleChangeGeometry}>
        <option value="box">Box</option>
        <option value="cylinder">Cylinder</option>
      </Select>
      component that has it's own state, reacts to user-input and participates
      in the render-loop. As a material we use the
      <Label htmlFor="material-seleect">Material</Label>
      <Select id="material-seleect" onChange={handleChangeMaterial}>
        <option value="meshStandardMaterial">Standard Material</option>
        <option value="meshBasicMaterial">Basic Material</option>
        <option value="meshPhysicalMaterial">Physical Material</option>
        <option value="meshPhongMaterial">Phong Material</option>
      </Select>
    </div>
  );
}

const Select = styled.select`
  font-size: ${fontSize.small};
  margin: 0 5px;

  &:focus {
    border: none;
  }
`;

// hidden but present for accessibility
const Label = styled.label`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`;
