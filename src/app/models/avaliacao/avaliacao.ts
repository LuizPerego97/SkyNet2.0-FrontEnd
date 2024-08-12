import { Filme } from '../filme/filme';

export class Avaliacao {
  id?: number;
  idFilme?: number;
  filme?: Filme;
  nomeUsuario?: string;
  comentario?: string;
  nota?: number;
  dataAvaliacao?: Date;
}
