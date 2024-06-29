const { google } = require('googleapis');
const moment = require('moment-timezone');

// const credentialsPath = JSON.parse(process.env.GOOGLE_CREDENTIALS);
const sheets = google.sheets('v4');
// Function to authorize the client
// async function authorize() {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: credentialsPath,
//         scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });
//     return await auth.getClient();
// }

  exports.mahiForm = async (req, res) => {
    try {
        // Generate current timestamp in EST
        const estTimestamp = moment.tz(moment(), 'America/New_York').format('YYYY-MM-DD HH:mm:ss');
        const name = req.body.name || '';
        const email = req.body.email || '';
        const problem_statement = req.body.problem_statement || '';
        const solution_description = req.body.solution_description || '';
        const technical_element = req.body.technical_element || '';
        const stage = req.body.stage || '';
        const responsibility_consent = req.body.responsibility_consent || '';
        const stakeholders = req.body.stakeholders || '';
        const question_consent = req.body.question_consent || '';

         // Authorize the client
        //  const authClient = await authorize();
        const authClient = new google.auth.JWT(
            'contact@aethos-427908.iam.gserviceaccount.com',
            null,
           '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXsE7SztKdPsTe\nohNoKG2FctAXgTWDAOvUipO+Rj6ZUI4vcO/Od+IRAXbsldwrcY+8LwODB2aXfJjN\n9pjF2D7gyj72XjTT25+P4CA1NJp9eRS9fQyhcInTnQqDiEANJShVxG2ugA9+W4Oj\nngAXkSZXhBBOFKXUJvRwjpWOHYY/+/R7Cp+vCjm433CRTxTjppFxql9yBlCY98BN\nUCOcQ1y8EBleZmvr4AuivVrLMZunSgO6oXpqXyK+G++U5SAxHbqRV+MIbY6VDRtT\nIqC48mXAVBwmOnZ+QQ2n3dzLSQonCG/Une9vBka36YMUus6f9M2BJi4R/t2qlKIX\ntFWg1AItAgMBAAECggEAC09S6snukFFEyHnOM7V+/LLnB3x+flaThysXETCkwqxP\nMFynLnfp0kN15XT8PQjw5QjAEeRW9FWTu6UVILa0oVvpjkilU4CeLtCtT6zo9vBc\n7oy6l1KL351J+liwJyBOK6UnrTFI3rLUxcUYsyOo04j4w+dgRK4gPjCz1eZlbkBi\nzQ3ijyC1tYgDTEHdR22OKnLWFZZ1vpPFPlnCkumfYZbzOqoC9LqlePtN2XI3MRHi\nSsGYMgntbtUTTS0P0g46jaxJFjdrjfp+LUv2Nm11GOWAW/OhYG0pw+Q7Y+zNeidE\n24GaGmVws14wkx/uVpCOazNrJNWe10+qV+8zs9C0oQKBgQDvp4cYByHdZyXFukDV\njqXTWgaiEjnl2tY9vYKV3uDvmGBGJmfNhEFAybUuxvh/ylq5mLnMdrRQquBC0qry\nv/xKQX7btQDHGkNyLtY98SjxnWMRZWFibUPIRv0Ui3pcq9SYCoLr65IRTFZbj7S8\nzth6SoCdVS2UJRpvT0NIz0luMQKBgQDmZlQRi0gipIJeM9OLCKiSShJ5JJwCE0bh\n3khTeOjUX3GiwGnFH7m+i/JlGQoXtRMYLGrLEbdzE06WIYQJ+U1+eSExwBMRWS/u\nEJWTbvoYviSvUJ94QdFEjg8iTSCg+C+PBnLyOx3cyUJ7MM6vjx3Q8NuMUtRdmkxM\nXUcsjUYovQKBgQDDr25+7yv2xgewuVHBTzYWKtdptSozhooTZc/gIlpXKXvLLAbs\naEaD6XAZHvzAE/IaxBtKWc8IY061IaHWj28pDuvP6K8W5FoYPShQ8b718wZ2qOpo\n3UFQoq55/R3P17rC3ypiCzt9BnEpWGFDHj7jNDxqu6d45Qb9xqHxLNkPsQKBgB8v\nxLtnNglyaS8lJsJQFrlOi3eYbAGf6F1UgEfEOwfcL36POwHyzGqteM8Ud5hD62S/\nRmlcaY+LEn0h5kSPWV0AOm0Iicw0XVeFKSn+wJ2uxzpv2FYn2pLEA+pptDv1vEJI\n5jBBrkYfe/8+2QtMfQW2RJGW+KX+58sCaUrviIqlAoGAAzOOiw6QHQJ4Tke05HgJ\nFI+MknqsbeX6s3cnjcqBv5CkofeFlrroFdf9EGZ78iou6vt7nIDq+iHOH2d5lBlf\nQXwFF3Q15i/2ODQh18gByu5ujHa8dDijfzbBFKatlXvyEonxcYA21Ytrllsq05Da\nBCgv2ba8nJCKIFTBUy2/pJg=\n-----END PRIVATE KEY-----\n'.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

         // Define the ID of the Google Sheet and the range where data should be added
         const spreadsheetId = '1HA_bmnkYKyYGuDPp8S2SB24pTbvfjLUMJ53ylUAIvi8';
         const tabName = 'Mahi'
         const range = 'A1:J1'; // Change this to the appropriate range
 
         // Define the values to append
         const values = [
             [estTimestamp,name, email, problem_statement, solution_description, technical_element, stage, responsibility_consent, stakeholders, question_consent]
         ];

         // Append the data to the Google Sheet
        await sheets.spreadsheets.values.append({
            auth: authClient,
            spreadsheetId,
            range: `${tabName}!${range}`,
            valueInputOption: 'RAW',
            resource: {
                values,
            },
        });

        res.status(200).send('Appointment added successfully');
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    }
  };

  exports.joinForm = async (req, res) => {
    try {
        // Generate current timestamp in EST
        const estTimestamp = moment.tz(moment(), 'America/New_York').format('YYYY-MM-DD HH:mm:ss');
        const fname = req.body.fname || '';
        const lname = req.body.lname || '';
        const email = req.body.email || '';
        const project_name = req.body.project_name || '';
        const phone = req.body.phone || '';
        const problem_statement = req.body.problem_statement || '';
        const solution_description = req.body.solution_description || '';
        const solution = req.body.solution || '';
        const sustainable_business = req.body.sustainable_business || '';
        const development_stage = req.body.development_stage || '';
        const founder_summary = req.body.founder_summary || '';
        const challenges_facing = req.body.challenges_facing || '';
        const contribution = req.body.contribution || '';
        const goals = req.body.goals || '';
        const aethos_found = req.body.aethos_found || '';
        const referred = req.body.referred || '';
        const relevant_info = req.body.relevant_info || '';

         // Authorize the client
        const authClient = new google.auth.JWT(
            'contact@aethos-427908.iam.gserviceaccount.com',
            null,
           '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXsE7SztKdPsTe\nohNoKG2FctAXgTWDAOvUipO+Rj6ZUI4vcO/Od+IRAXbsldwrcY+8LwODB2aXfJjN\n9pjF2D7gyj72XjTT25+P4CA1NJp9eRS9fQyhcInTnQqDiEANJShVxG2ugA9+W4Oj\nngAXkSZXhBBOFKXUJvRwjpWOHYY/+/R7Cp+vCjm433CRTxTjppFxql9yBlCY98BN\nUCOcQ1y8EBleZmvr4AuivVrLMZunSgO6oXpqXyK+G++U5SAxHbqRV+MIbY6VDRtT\nIqC48mXAVBwmOnZ+QQ2n3dzLSQonCG/Une9vBka36YMUus6f9M2BJi4R/t2qlKIX\ntFWg1AItAgMBAAECggEAC09S6snukFFEyHnOM7V+/LLnB3x+flaThysXETCkwqxP\nMFynLnfp0kN15XT8PQjw5QjAEeRW9FWTu6UVILa0oVvpjkilU4CeLtCtT6zo9vBc\n7oy6l1KL351J+liwJyBOK6UnrTFI3rLUxcUYsyOo04j4w+dgRK4gPjCz1eZlbkBi\nzQ3ijyC1tYgDTEHdR22OKnLWFZZ1vpPFPlnCkumfYZbzOqoC9LqlePtN2XI3MRHi\nSsGYMgntbtUTTS0P0g46jaxJFjdrjfp+LUv2Nm11GOWAW/OhYG0pw+Q7Y+zNeidE\n24GaGmVws14wkx/uVpCOazNrJNWe10+qV+8zs9C0oQKBgQDvp4cYByHdZyXFukDV\njqXTWgaiEjnl2tY9vYKV3uDvmGBGJmfNhEFAybUuxvh/ylq5mLnMdrRQquBC0qry\nv/xKQX7btQDHGkNyLtY98SjxnWMRZWFibUPIRv0Ui3pcq9SYCoLr65IRTFZbj7S8\nzth6SoCdVS2UJRpvT0NIz0luMQKBgQDmZlQRi0gipIJeM9OLCKiSShJ5JJwCE0bh\n3khTeOjUX3GiwGnFH7m+i/JlGQoXtRMYLGrLEbdzE06WIYQJ+U1+eSExwBMRWS/u\nEJWTbvoYviSvUJ94QdFEjg8iTSCg+C+PBnLyOx3cyUJ7MM6vjx3Q8NuMUtRdmkxM\nXUcsjUYovQKBgQDDr25+7yv2xgewuVHBTzYWKtdptSozhooTZc/gIlpXKXvLLAbs\naEaD6XAZHvzAE/IaxBtKWc8IY061IaHWj28pDuvP6K8W5FoYPShQ8b718wZ2qOpo\n3UFQoq55/R3P17rC3ypiCzt9BnEpWGFDHj7jNDxqu6d45Qb9xqHxLNkPsQKBgB8v\nxLtnNglyaS8lJsJQFrlOi3eYbAGf6F1UgEfEOwfcL36POwHyzGqteM8Ud5hD62S/\nRmlcaY+LEn0h5kSPWV0AOm0Iicw0XVeFKSn+wJ2uxzpv2FYn2pLEA+pptDv1vEJI\n5jBBrkYfe/8+2QtMfQW2RJGW+KX+58sCaUrviIqlAoGAAzOOiw6QHQJ4Tke05HgJ\nFI+MknqsbeX6s3cnjcqBv5CkofeFlrroFdf9EGZ78iou6vt7nIDq+iHOH2d5lBlf\nQXwFF3Q15i/2ODQh18gByu5ujHa8dDijfzbBFKatlXvyEonxcYA21Ytrllsq05Da\nBCgv2ba8nJCKIFTBUy2/pJg=\n-----END PRIVATE KEY-----\n'.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

         // Define the ID of the Google Sheet and the range where data should be added
         const spreadsheetId = '1HA_bmnkYKyYGuDPp8S2SB24pTbvfjLUMJ53ylUAIvi8';
         const tabName = 'Join'
         const range = 'A1:R1'; // Change this to the appropriate range
 
        // Define the values to append
        const values = [
            [
                estTimestamp,
                fname,
                lname,
                email,
                project_name,
                phone,
                problem_statement,
                solution_description,
                solution,
                sustainable_business,
                development_stage,
                founder_summary,
                challenges_facing,
                contribution,
                goals,
                aethos_found,
                referred,
                relevant_info
            ]
        ];

         // Append the data to the Google Sheet
        await sheets.spreadsheets.values.append({
            auth: authClient,
            spreadsheetId,
            range: `${tabName}!${range}`,
            valueInputOption: 'RAW',
            resource: {
                values,
            },
        });

        res.status(200).send('Form data added successfully');
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    }
  };

  exports.newsletterForm = async (req, res) => {
    try {
        // Generate current timestamp in EST
        const estTimestamp = moment.tz(moment(), 'America/New_York').format('YYYY-MM-DD HH:mm:ss');
        const email = req.body.email || '';

         // Authorize the client
        const authClient = new google.auth.JWT(
            'contact@aethos-427908.iam.gserviceaccount.com',
            null,
           '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXsE7SztKdPsTe\nohNoKG2FctAXgTWDAOvUipO+Rj6ZUI4vcO/Od+IRAXbsldwrcY+8LwODB2aXfJjN\n9pjF2D7gyj72XjTT25+P4CA1NJp9eRS9fQyhcInTnQqDiEANJShVxG2ugA9+W4Oj\nngAXkSZXhBBOFKXUJvRwjpWOHYY/+/R7Cp+vCjm433CRTxTjppFxql9yBlCY98BN\nUCOcQ1y8EBleZmvr4AuivVrLMZunSgO6oXpqXyK+G++U5SAxHbqRV+MIbY6VDRtT\nIqC48mXAVBwmOnZ+QQ2n3dzLSQonCG/Une9vBka36YMUus6f9M2BJi4R/t2qlKIX\ntFWg1AItAgMBAAECggEAC09S6snukFFEyHnOM7V+/LLnB3x+flaThysXETCkwqxP\nMFynLnfp0kN15XT8PQjw5QjAEeRW9FWTu6UVILa0oVvpjkilU4CeLtCtT6zo9vBc\n7oy6l1KL351J+liwJyBOK6UnrTFI3rLUxcUYsyOo04j4w+dgRK4gPjCz1eZlbkBi\nzQ3ijyC1tYgDTEHdR22OKnLWFZZ1vpPFPlnCkumfYZbzOqoC9LqlePtN2XI3MRHi\nSsGYMgntbtUTTS0P0g46jaxJFjdrjfp+LUv2Nm11GOWAW/OhYG0pw+Q7Y+zNeidE\n24GaGmVws14wkx/uVpCOazNrJNWe10+qV+8zs9C0oQKBgQDvp4cYByHdZyXFukDV\njqXTWgaiEjnl2tY9vYKV3uDvmGBGJmfNhEFAybUuxvh/ylq5mLnMdrRQquBC0qry\nv/xKQX7btQDHGkNyLtY98SjxnWMRZWFibUPIRv0Ui3pcq9SYCoLr65IRTFZbj7S8\nzth6SoCdVS2UJRpvT0NIz0luMQKBgQDmZlQRi0gipIJeM9OLCKiSShJ5JJwCE0bh\n3khTeOjUX3GiwGnFH7m+i/JlGQoXtRMYLGrLEbdzE06WIYQJ+U1+eSExwBMRWS/u\nEJWTbvoYviSvUJ94QdFEjg8iTSCg+C+PBnLyOx3cyUJ7MM6vjx3Q8NuMUtRdmkxM\nXUcsjUYovQKBgQDDr25+7yv2xgewuVHBTzYWKtdptSozhooTZc/gIlpXKXvLLAbs\naEaD6XAZHvzAE/IaxBtKWc8IY061IaHWj28pDuvP6K8W5FoYPShQ8b718wZ2qOpo\n3UFQoq55/R3P17rC3ypiCzt9BnEpWGFDHj7jNDxqu6d45Qb9xqHxLNkPsQKBgB8v\nxLtnNglyaS8lJsJQFrlOi3eYbAGf6F1UgEfEOwfcL36POwHyzGqteM8Ud5hD62S/\nRmlcaY+LEn0h5kSPWV0AOm0Iicw0XVeFKSn+wJ2uxzpv2FYn2pLEA+pptDv1vEJI\n5jBBrkYfe/8+2QtMfQW2RJGW+KX+58sCaUrviIqlAoGAAzOOiw6QHQJ4Tke05HgJ\nFI+MknqsbeX6s3cnjcqBv5CkofeFlrroFdf9EGZ78iou6vt7nIDq+iHOH2d5lBlf\nQXwFF3Q15i/2ODQh18gByu5ujHa8dDijfzbBFKatlXvyEonxcYA21Ytrllsq05Da\nBCgv2ba8nJCKIFTBUy2/pJg=\n-----END PRIVATE KEY-----\n'.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

         // Define the ID of the Google Sheet and the range where data should be added
         const spreadsheetId = '1HA_bmnkYKyYGuDPp8S2SB24pTbvfjLUMJ53ylUAIvi8';
         const tabName = 'newsletter'
         const range = 'A1:B1'; // Change this to the appropriate range
 
        // Define the values to append
        const values = [
          [estTimestamp, email]
      ];

         // Append the data to the Google Sheet
        await sheets.spreadsheets.values.append({
            auth: authClient,
            spreadsheetId,
            range: `${tabName}!${range}`,
            valueInputOption: 'RAW',
            resource: {
                values,
            },
        });

        res.status(200).send('Newsletter subscription added successfully');
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    }
  };