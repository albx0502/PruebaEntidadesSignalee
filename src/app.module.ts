import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module'; // Asegúrate de importar el módulo de usuario
import { Usuario } from './entities/usuario.entity';
import { PerfilUsuario } from './entities/perfil_usuario.entity';
import { Sesion } from './entities/sesion.entity';
import { Chat } from './entities/chat.entity';
import { Videollamada } from './entities/videollamada.entity';
import { Pregunta } from './entities/pregunta.entity';
import { Respuesta } from './entities/respuesta.entity';
import { InteraccionAR } from './entities/interaccion_ar.entity';
import { GestionUsuario } from './entities/gestion_usuario.entity';
import { Notificacion } from './entities/notificacion.entity';
import { Gesto } from './entities/gesto.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          Usuario,
          PerfilUsuario,
          Sesion,
          Chat,
          Videollamada,
          Pregunta,
          Respuesta,
          InteraccionAR,
          GestionUsuario,
          Notificacion,
          Gesto,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    // Importar módulos individuales aquí (UsuarioModule, PerfilUsuarioModule, etc.)
    UsuarioModule,
  ],
})
export class AppModule {}
