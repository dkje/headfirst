export const MachineStatus = {
    SOLD_OUT: 0,
    NO_QUARTER: 1,
    HAS_QUARTER: 2,
    SOLD: 3
} as const;

export type MachineStatusType = typeof MachineStatus;