import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {DataAlamatService} from '../../Services/DataAlamatService';

export default class AlamatsController {

    public async getByID({ request, response }: HttpContextContract) {
        const params = request.body();
        
        let listDataAlamat = await DataAlamatService.getInstance();

        // check if id matches on data kecamatan
        const listDataKecamatan = listDataAlamat['address_kecamatan'];

        for(var i = 0; i < listDataKecamatan.length; i++) {
          if(listDataKecamatan[i]['id'] == params['id']) {
            return response.json({
              status: 'success',
              data: listDataKecamatan[i]
            });
          }
        }

        // check if id matches on data provinsi
        const dataProvinsi = listDataAlamat['address_provinsi'];

        for(var i = 0; i < dataProvinsi.length; i++) {
          if(dataProvinsi[i]['id'] == params['id']) {
            return response.json({
              status: 'success',
              data: dataProvinsi[i]
            });
          }
        }

        const dataKelurahan = listDataAlamat['address_kelurahan'];

        for(var i = 0; i < dataKelurahan.length; i++) {
          if(dataKelurahan[i]['id'] == params['id']) {
            return response.json({
              status: 'success',
              data: dataKelurahan[i]
            });
          }
        }

        const dataKota = listDataAlamat['address_kota'];

        for(var i = 0; i < dataKota.length; i++) {
          if(dataKota[i]['id'] == params['id']) {
            return response.json({
              status: 'success',
              data: dataKota[i]
            })
          }
        }

        return response.status(400).json({
          status: 'failed',
          messages: 'data not found'
        });
    }

    public async getByKotaID({ request, response }: HttpContextContract) {
        const params = request.body();
        
        let listDataAlamat = await DataAlamatService.getInstance();

          // search kecamatan by kota_id
        const listDataKecamatan = listDataAlamat['address_kecamatan'];
        let resultDataKecamatan: any = [];

        for(var i = 0; i < listDataKecamatan.length; i++) {
          if(listDataKecamatan[i]['kota_id'] == params['kota_id']) {
            resultDataKecamatan.push(listDataKecamatan[i]);
          }
        }

        if(resultDataKecamatan.length > 0) {
          return response.json({
            status: 'success',
            data: resultDataKecamatan
          });
        }

        return response.status(400).json({
          status: 'failed',
          messages: 'data not found'
        });
    }


}
