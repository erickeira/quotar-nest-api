import { LOJST_STATUS } from "../enums/lojst-status.enum";
import { Exclude } from 'class-transformer';

export class CreateLojistaDto {
    lojst_nome:                 string;
    lojst_cpf:                  string;
    lojst_img_perfil?:          string;
    lojst_telefone:             string;
    lojst_email:                string;
    lojst_data_cadastro:        Date;
    lojst_cep?:                 string;
    lojst_endereco?:            string;
    lojst_status:               LOJST_STATUS;

    @Exclude()
    lojst_loguin:               string;

    lojst_senha_hash:           string;
    lojst_token_inspiracao:     string;
    lojst_token_recuperacao:    string;
    cid_id:                     number;
    bai_id:                     number;
    est_id:                     number;
    lojst_loja_parceira?:       string;

    constructor(partial: CreateLojistaDto) {
        Object.assign(this, partial);
      }
}