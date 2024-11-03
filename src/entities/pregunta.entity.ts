// src/entities/pregunta.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Respuesta } from './respuesta.entity';

@Entity('preguntas')
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.preguntas)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'text' }) // tipo text sin length
  contenido: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;

  @OneToMany(() => Respuesta, (respuesta) => respuesta.pregunta)
  respuestas: Respuesta[];
}
