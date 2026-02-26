import { DeviceHandle } from '../model/DeviceHandle';
import { DeviceRecord } from '../model/DeviceRecord';
import { ATMException } from '../exception/ATMException';
import { InvalidDeviceException } from '../exception/InvalidDeviceException';
import { DeviceSuspendedException } from '../exception/DeviceSuspendedException';
import { InsufficientFundsException } from '../exception/InsufficientFundsException';
import { NetworkConnectionException } from '../exception/NetworkConnectionException';

export class ATMDeviceController {

    private static readonly DEV1 = "DEV1";
    private static readonly DEVICE_SUSPENDED = -1;
    private static readonly WIFI_CONNECTED = 1;

    public withdraw(accountId: string, amount: number): void {
        try {
            this.processWithdrawal(accountId, amount);
        } catch (error) {
            if (error instanceof ATMException) {
                console.error(`Transaction Failed: ${error.message}`);
            } else {
                console.error("An unexpected system error occurred.");
            }
        }
    }

    private processWithdrawal(accountId: string, amount: number): void {
        const handle = this.getHandle(ATMDeviceController.DEV1);

        if (handle === DeviceHandle.INVALID) {
            throw new InvalidDeviceException(
                `Device handle is invalid for ATM identifier: ${ATMDeviceController.DEV1}`
            );
        }

        const record = this.retrieveDeviceRecord(handle);

        if (record.status === ATMDeviceController.DEVICE_SUSPENDED) {
            throw new DeviceSuspendedException("Cannot process. Device is currently suspended.");
        }

        if (record.wifiConnection !== ATMDeviceController.WIFI_CONNECTED) {
            throw new NetworkConnectionException("Connection error. Device lost WiFi connection.");
        }

        if (this.getBalance(accountId) < amount) {
            throw new InsufficientFundsException(
                `Insufficient funds. Account ${accountId} requested ${amount.toFixed(2)}`
            );
        }

        this.dispenseCash(handle, amount);
        console.log(`Successfully dispensed ${amount} to account ${accountId}`);
    }

    private getHandle(deviceId: string): DeviceHandle {
        return DeviceHandle.VALID; 
    }

    private retrieveDeviceRecord(handle: DeviceHandle): DeviceRecord {
        return new DeviceRecord(0, ATMDeviceController.WIFI_CONNECTED); 
    }

    private getBalance(accountId: string): number {
        return 1000.00; 
    }

    private dispenseCash(handle: DeviceHandle, amount: number): void {}
}