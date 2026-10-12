import { Injectable, Param } from '@nestjs/common';
import { ConvertMeterDTO } from './dto/convert-meters.dto.js';

@Injectable()
export class ConvertService {
    convertMeters(params : ConvertMeterDTO){
        const meters = params.meters
        const kilometer = params.meters/1000
        const centimeter = params.meters*100
        const miles = params.meters*39370.1

        return{
            success: true,
            message: `Length has converted`,
            data: {
                meters,
                kilometer,
                centimeter,
                miles
            }
        }
    }

}
