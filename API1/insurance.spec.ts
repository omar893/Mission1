import request from 'supertest';
import server from './index';

describe('Mission1 API Endpoint Tests', () => {
    it('should return turners car insurance on GET /', async () => {
      // Arrange
      const expected = 'Turners Car Insurance';
  
      // Act
      const actual = await request(server).get('/');
  
      // Assert
      expect(actual.text).toBe(expected);
    });
  
    it('should return a car value in JSON format on POST /value', async () => {
      // Arrange
      const expected = {car_value: 6611};
  
      // Act
      const actual = await request(server).post('/value').send({model: 'civic', year: 2011});
  
      // Assert
      expect(JSON.parse(actual.text)).toStrictEqual(expected);
    });

    it('should return a risk rating in JSON format on POST /risk', async () => {
        // Arrange
        const expected = {risk_rating: 3};
    
        // Act
        const actual = await request(server).post('/risk').send({claim_history: 'My only claim was a crash into my houses garage door that left a scratch on my car.  There are no other crashes.'});
    
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    });
  });