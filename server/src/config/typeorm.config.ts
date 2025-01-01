// import { ConfigService } from '@nestjs/config';
// import {
//   TypeOrmModuleAsyncOptions,
//   TypeOrmModuleOptions,
// } from '@nestjs/typeorm';

// export class TypeOrmConfig {
//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',
//       host: configService.get('DB_HOST'),
//       port: 5432,
//       username: configService.get('DB_USERNAME'),
//       password: configService.get('DB_PASSWORD'),
//       database: configService.get('DB_DATABASE'),
//       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//       synchronize: true,
//       autoLoadEntities: true,
//     };
//   }
// }

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//   inject: [ConfigService],
// };
