// src/entities/chat.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.chatsEnviados)
  @JoinColumn({ name: 'id_usuario_emisor' })
  emisor: Usuario;

  @ManyToOne(() => Usuario, (usuario) => usuario.chatsRecibidos)
  @JoinColumn({ name: 'id_usuario_receptor' })
  receptor: Usuario;

  @Column({ type: 'text' }) // Elimina `length` aquí
  mensaje: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_envio: Date;
}
