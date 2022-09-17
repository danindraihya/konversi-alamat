import axios from 'axios';

export class DataAlamatService {
    private static _instanceAlamatService: string;

    private constructor() { }

    public static async getInstance(): Promise<string> {
        if (!DataAlamatService._instanceAlamatService) {

            let response = await axios.get("https://kasirpintar.co.id/allAddress.txt");

            DataAlamatService._instanceAlamatService = response.data;
        }

        return DataAlamatService._instanceAlamatService;
    }
}
