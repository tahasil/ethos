const { google } = require('googleapis');
const moment = require('moment-timezone');
const AWS = require('aws-sdk');
const sheets = google.sheets('v4');


exports.getSignedURL = async (req, res) => {
    let id = req.query.id || req.AuthData?.id || '';
    let folder_name = req.query.folder_name || '';
    let file_name = req.query.file_name || '';
    let ext = req.query.ext || '';
    let action = req.query.action || 'putObject';
    if (!folder_name && !file_name && !ext) {
        return helper.response(
            res,
            req.logger,
            false,
            'Bad request: Folder name, File Name, and ext required',
            null,
            null,
            500,
        );
    }

    try {
        const s3 = new AWS.S3({
            endpoint: process.env.S3_ENDPOINT,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            Bucket: process.env.S3_BUCKET_NAME,
            signatureVersion: 'v4',
            region: process.env.AWS_REGION,
        });

        const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: `${folder_name}/${id}/${file_name}.${ext}`,
            Expires: 60 * 5,
            ContentType: 'application/octet-stream',
        };

        console.log('key', params.Key);

        const response = s3.getSignedUrl(action, params);
        return res.status(200).send({ response: response });
    } catch (error) {
        return res.send(
            res,
            req.logger,
            false,
            'Something went wrong',
            null,
            null,
            500,
        );
    }
};

exports.mahiForm = async (req, res) => {
    try {
        // Generate current timestamp in EST
        const estTimestamp = moment.tz(moment(), 'America/New_York').format('YYYY-MM-DD HH:mm:ss');
        const name = req.body.name || '';
        const email = req.body.email || '';
        const problem_statement = req.body.problem_statement || '';
        const solution_description = req.body.solution_description || '';
        const technical_elements = req.body.technical_elements || '';
        const stage = req.body.stage || '';
        const responsibility_consent = req.body.responsibility_consent || '';
        const stakeholders = req.body.stakeholders || '';
        const fileLink = req.body.fileLink || '';
        const consent = req.body.consent || '';
        const securing_plan = req.body.securing_plan || '';

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
            [estTimestamp, consent, name, email, problem_statement, solution_description, technical_elements, stage, responsibility_consent, stakeholders, fileLink, securing_plan]
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
        const linkedin = req.body.linkedin || '';
        const team = req.body.team || '';
        const when_aethos = req.body.when_aethos || '';
        const cic_member = req.body.cic_member || '';
        const problem_statement = req.body.problem_statement || '';
        const solution_description = req.body.solution_description || '';
        const sustainable_business = req.body.sustainable_business || '';
        const gaps = req.body.gaps || '';
        const resources = req.body.resources || '';
        const yourself = req.body.yourself || '';
        const hours_spend = req.body.hours_spend || '';
        const usd = req.body.usd || '';
        const fileLink = req.body.fileLink || '';
        const why_aethos = req.body.why_aethos || '';
        const contribution = req.body.contribution || '';
        const goals = req.body.goals || '';
        const joining = req.body.joining || '';
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
                linkedin,
                team,
                when_aethos,
                cic_member,
                problem_statement,
                solution_description,
                sustainable_business,
                gaps,
                resources,
                yourself,
                hours_spend,
                usd,
                fileLink,
                why_aethos,
                contribution,
                goals,
                joining,
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
        const tabName = 'Newsletter'
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

exports.contactForm = async (req, res) => {
    try {
        // Generate current timestamp in EST
        const estTimestamp = moment.tz(moment(), 'America/New_York').format('YYYY-MM-DD HH:mm:ss');
        const name = req.body.name || '';
        const email = req.body.email || '';
        const message = req.body.message || '';

        // Authorize the client
        const authClient = new google.auth.JWT(
            'contact@aethos-427908.iam.gserviceaccount.com',
            null,
            '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXsE7SztKdPsTe\nohNoKG2FctAXgTWDAOvUipO+Rj6ZUI4vcO/Od+IRAXbsldwrcY+8LwODB2aXfJjN\n9pjF2D7gyj72XjTT25+P4CA1NJp9eRS9fQyhcInTnQqDiEANJShVxG2ugA9+W4Oj\nngAXkSZXhBBOFKXUJvRwjpWOHYY/+/R7Cp+vCjm433CRTxTjppFxql9yBlCY98BN\nUCOcQ1y8EBleZmvr4AuivVrLMZunSgO6oXpqXyK+G++U5SAxHbqRV+MIbY6VDRtT\nIqC48mXAVBwmOnZ+QQ2n3dzLSQonCG/Une9vBka36YMUus6f9M2BJi4R/t2qlKIX\ntFWg1AItAgMBAAECggEAC09S6snukFFEyHnOM7V+/LLnB3x+flaThysXETCkwqxP\nMFynLnfp0kN15XT8PQjw5QjAEeRW9FWTu6UVILa0oVvpjkilU4CeLtCtT6zo9vBc\n7oy6l1KL351J+liwJyBOK6UnrTFI3rLUxcUYsyOo04j4w+dgRK4gPjCz1eZlbkBi\nzQ3ijyC1tYgDTEHdR22OKnLWFZZ1vpPFPlnCkumfYZbzOqoC9LqlePtN2XI3MRHi\nSsGYMgntbtUTTS0P0g46jaxJFjdrjfp+LUv2Nm11GOWAW/OhYG0pw+Q7Y+zNeidE\n24GaGmVws14wkx/uVpCOazNrJNWe10+qV+8zs9C0oQKBgQDvp4cYByHdZyXFukDV\njqXTWgaiEjnl2tY9vYKV3uDvmGBGJmfNhEFAybUuxvh/ylq5mLnMdrRQquBC0qry\nv/xKQX7btQDHGkNyLtY98SjxnWMRZWFibUPIRv0Ui3pcq9SYCoLr65IRTFZbj7S8\nzth6SoCdVS2UJRpvT0NIz0luMQKBgQDmZlQRi0gipIJeM9OLCKiSShJ5JJwCE0bh\n3khTeOjUX3GiwGnFH7m+i/JlGQoXtRMYLGrLEbdzE06WIYQJ+U1+eSExwBMRWS/u\nEJWTbvoYviSvUJ94QdFEjg8iTSCg+C+PBnLyOx3cyUJ7MM6vjx3Q8NuMUtRdmkxM\nXUcsjUYovQKBgQDDr25+7yv2xgewuVHBTzYWKtdptSozhooTZc/gIlpXKXvLLAbs\naEaD6XAZHvzAE/IaxBtKWc8IY061IaHWj28pDuvP6K8W5FoYPShQ8b718wZ2qOpo\n3UFQoq55/R3P17rC3ypiCzt9BnEpWGFDHj7jNDxqu6d45Qb9xqHxLNkPsQKBgB8v\nxLtnNglyaS8lJsJQFrlOi3eYbAGf6F1UgEfEOwfcL36POwHyzGqteM8Ud5hD62S/\nRmlcaY+LEn0h5kSPWV0AOm0Iicw0XVeFKSn+wJ2uxzpv2FYn2pLEA+pptDv1vEJI\n5jBBrkYfe/8+2QtMfQW2RJGW+KX+58sCaUrviIqlAoGAAzOOiw6QHQJ4Tke05HgJ\nFI+MknqsbeX6s3cnjcqBv5CkofeFlrroFdf9EGZ78iou6vt7nIDq+iHOH2d5lBlf\nQXwFF3Q15i/2ODQh18gByu5ujHa8dDijfzbBFKatlXvyEonxcYA21Ytrllsq05Da\nBCgv2ba8nJCKIFTBUy2/pJg=\n-----END PRIVATE KEY-----\n'.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        // Define the ID of the Google Sheet and the range where data should be added
        const spreadsheetId = '1HA_bmnkYKyYGuDPp8S2SB24pTbvfjLUMJ53ylUAIvi8';
        const tabName = 'Contact';
        const range = 'A2:D4';

        // Define the values to append
        const values = [
            [estTimestamp, name, email, message]
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

        res.status(200).send('Form submitted successfully');
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
};