// src/entities/respuesta.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Pregunta } from './pregunta.entity';

@Entity('respuestas')
export class Respuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pregunta, (pregunta) => pregunta.respuestas)
  @JoinColumn({ name: 'id_pregunta' })
  pregunta: Pregunta;

  @ManyToOne(() => Usuario, (usuario) => usuario.respuestas)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'text' }) // tipo text sin length
  contenido: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;

  @Column({ type: 'int', default: 0 })
  votos: number;
}
