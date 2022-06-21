import { MigrationInterface, QueryRunner } from "typeorm";

export class NewOnes1655813596221 implements MigrationInterface {
    name = 'NewOnes1655813596221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "surname" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "surname"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
    }

}
