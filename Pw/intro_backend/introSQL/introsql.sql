use db_karyawan;

select * from tb_biodata;
SELECT idtb_biodata, nama from tb_biodata;
SELECT idtb_biodata as ID, nama as Name from tb_biodata;

Insert into tb_biodata (nama, usia, alamat) values ('Deya', 28, 'Cianjur')tb_product_ikeatb_product_ikea;
insert into tb_biodata values (null,'Sena', 2, 'Cirebon', 'Active');
insert into tb_biodata (nama, usia, alamat) values
('Ananta', 34, 'Bandung'),
('Buahaha', 23, 'Citayem'),
('Naoki', 33, 'Teluk Jambe');

update tb_biodata set nama='Mugi' where idtb_biodata = 4;

select * from tb_biodata order by alamat asc;
select * from tb_biodata limit 4;
select * from tb_biodata limit 2,3;
select * from tb_biodata order by nama asc limit 3,4;

select * from tb_biodata where alamat='Cirebon' order by usia asc;
select * from tb_biodata where usia between 3 and 28;
select * from tb_biodata where nama LIKE '%A%';
select min(usia) as Usia_Minimum, max(usia) as Usia_Maximum, avg(usia) as Rata_Rata from tb_biodata;

select count(*)
as jumlah_data_table,
sum(usia) as jumlah_total_utb_product_ikeasia,
min(usia) as usia_minimum,
max(usia) as usia_maximum,
avg(usia) as rata_rata from tb_biodata;

select alamat as alamat, count(alamat) as jumlah_karyawan from tb_biodata group by alamat;

select alamat as alamat, count(alamat) as jumlah_karyawan, sum(usia)/count(usia) as rata_rata_usia from tb_biodata group by alamat;

-- Tugas Mentoring
-- Buat API baru beri nama ikea_api
-- Sudah ada konfigurasi express, router dan controller, PORT 2025
-- Buat database ikea, siapkan table user(id,username,email,password,role,status) 
-- dan table product(idproduct,image,nama,deskripsi,qty,harga,status) 

select * from db_ikea.tb_user_ikea
alter user 'bela'@'%' identified with mysql_native_password by 'Sumber667@';
