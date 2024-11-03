// src/entities/usuario.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { PerfilUsuario } from './perfil_usuario.entity';
import { Sesion } from './sesion.entity';
import { Chat } from './chat.entity';
import { Videollamada } from './videollamada.entity';
import { Pregunta } from './pregunta.entity';
import { Respuesta } from './respuesta.entity';
import { InteraccionAR } from './interaccion_ar.entity';
import { Notificacion } from './notificacion.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 }) // tipo varchar
  nombre: string;

  @Column({ length: 40 }) // tipo varchar
  apellidos: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  contraseña: string;

  @Column({ length: 50 }) // tipo varchar
  rol: string;

  @Column({ type: 'text', nullable: true }) // tipo text sin length
  biografia: string;

  @Column({ length: 100, nullable: true }) // tipo varchar
  especializacion: string;

  @Column({ nullable: true })
  foto_perfil: string;

  @Column({ type: 'json', nullable: true })
  preferencias: object;

  @Column({ length: 20 }) // tipo varchar
  estado: string;

  @OneToOne(() => PerfilUsuario, (perfil) => perfil.usuario)
  perfil: PerfilUsuario;

  @OneToMany(() => Sesion, (sesion) => sesion.usuario)
  sesiones: Sesion[];

  @OneToMany(() => Chat, (chat) => chat.emisor)
  chatsEnviados: Chat[];

  @OneToMany(() => Chat, (chat) => chat.receptor)
  chatsRecibidos: Chat[];

  @OneToMany(() => Videollamada, (videollamada) => videollamada.usuario)
  videollamadas: Videollamada[];

  @OneToMany(() => Pregunta, (pregunta) => pregunta.usuario)
  preguntas: Pregunta[];

  @OneToMany(() => Respuesta, (respuesta) => respuesta.usuario)
  respuestas: Respuesta[];

  @OneToMany(() => InteraccionAR, (interaccion) => interaccion.usuario)
  interaccionesAR: InteraccionAR[];

  @OneToMany(() => Notificacion, (notificacion) => notificacion.usuario)
  notificaciones: Notificacion[];
}
