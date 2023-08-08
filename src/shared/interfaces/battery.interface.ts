import { CustomObject } from "shared/types/example.types";

export interface ManufacturerInterface {
  _id: string;
  name: string;
}

export interface BatteryInterface {
  _id: CustomObject;
  manufacturer: ManufacturerInterface;
  name: string;
  specifiedIr: number;
  warningIr: number;
  failedIr: number;
  designLife: string;
  batteryId: number;
}
