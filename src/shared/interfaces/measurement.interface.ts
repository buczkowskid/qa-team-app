export type Result = "P" | "F" | "W";

export interface MeasurementInterface {
  shelf: number;
  battery: number;
  resistance: number;
  voltage: number;
  temperature: number;
  result: Result;
}
