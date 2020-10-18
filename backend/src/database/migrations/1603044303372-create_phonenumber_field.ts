import { Column, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class createPhonenumberField1603044303372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "orphanages" ADD COLUMN "phone_number" VARCHAR(255) DEFAULT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "orphanages" DROP COLUMN "phone_number"')
    }

}
