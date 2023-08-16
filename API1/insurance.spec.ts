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

    it('should return a car value in JSON format on POST /value and ignore symbols', async () => {
      // Arrange
      const expected = {car_value: 6611};
  
      // Act
      const actual = await request(server).post('/value').send({model: 'c!ivi@#c', year: 2011});
  
      // Assert
      expect(JSON.parse(actual.text)).toStrictEqual(expected);
    });

    it('should return an ERROR in JSON format on POST /value when given a negative year', async () => {
      // Arrange
      const expected = {error: 'Year cannot be negative'};
  
      // Act
      const actual = await request(server).post('/value').send({model: 'civic', year: -2011});
  
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

    it('should return a risk rating in JSON format on POST /risk regardless of UPPERCASE', async () => {
      // Arrange
      const expected = {risk_rating: 3};
  
      // Act
      const actual = await request(server).post('/risk').send({claim_history: 'My only claim was a CRASH into my houses garage door that left a sCRatch on my car.  There are no other CRASHES.'});
  
      // Assert
      expect(JSON.parse(actual.text)).toStrictEqual(expected);
    });

    it('should return a risk rating in JSON format on POST /risk if only key words are input', async () => {
      // Arrange
      const expected = {risk_rating: 4};
  
      // Act
      const actual = await request(server).post('/risk').send({claim_history: 'collide crash scratch bump'});
  
      // Assert
      expect(JSON.parse(actual.text)).toStrictEqual(expected);
    });

    it('should return an ERROR in JSON format on POST /risk when given an empty string', async () => {
      // Arrange
      const expected = {error: 'cannot have an empty input'};
  
      // Act
      const actual = await request(server).post('/risk').send({claim_history: ''});
  
      // Assert
      expect(JSON.parse(actual.text)).toStrictEqual(expected);
    });

    
  });