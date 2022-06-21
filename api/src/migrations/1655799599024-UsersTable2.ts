import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable21655799599024 implements MigrationInterface {
    name = 'UsersTable21655799599024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

}
