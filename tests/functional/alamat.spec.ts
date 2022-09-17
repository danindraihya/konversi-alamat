import { test } from '@japa/runner'
import User from 'App/Models/User';

test.group('Unit Test for /getByID', (group) => {
  let user: User;

  group.setup(() => {
    user = new User();
    user.id = 1;
  });


  test("POST /getByID with token auth and data exists", async ({ client }) => {

    const response = await client.post('/getByID').json({ id: 1101032 }).guard('api').loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({
      status: 'success'
    });
  });

  test("POST /getByID without token auth", async ({ client }) => {

    const response = await client.post('/getByID').json({ id: 1101032 });

    response.assertStatus(401);
  });

  test("POST /getByID with token auth and data doesn't exists", async ({ client }) => {

    const response = await client.post('/getByID').json({ id: 1 }).guard('api').loginAs(user);

    response.assertStatus(400);
    response.assertBodyContains({
      status: 'failed'
    });
  });

  test("POST /getByID without input body", async ({ client }) => {

    const response = await client.post('/getByID').guard('api').loginAs(user);

    response.assertStatus(400);
    response.assertBodyContains({
      status: 'failed'
    });
  });

});

test.group('Unit Test for /getByKotaID', (group) => {
  let user: User;

  group.setup(() => {
    user = new User();
    user.id = 1;
  });


  test("POST /getByKotaID with token auth and data exists", async ({ client }) => {

    const response = await client.post('/getByKotaID').json({ kota_id: 1105 }).guard('api').loginAs(user);

    response.assertStatus(200);
    response.assertBodyContains({
      status: 'success'
    });
  });

  test("POST /getByKotaID without token auth", async ({ client }) => {

    const response = await client.post('/getByKotaID').json({ id: 1105 });

    response.assertStatus(401);
  });

  test("POST /getByKotaID with token auth and data doesn't exists", async ({ client }) => {

    const response = await client.post('/getByKotaID').json({ id: 1 }).guard('api').loginAs(user);

    response.assertStatus(400);
    response.assertBodyContains({
      status: 'failed'
    });
  });

  test("POST /getByKotaID without input body", async ({ client }) => {

    const response = await client.post('/getByKotaID').guard('api').loginAs(user);

    response.assertStatus(400);
    response.assertBodyContains({
      status: 'failed'
    });
  });

});
