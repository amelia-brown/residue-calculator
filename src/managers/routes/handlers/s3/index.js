import aws from 'aws-sdk'

aws.config.region = 'us-west-1'

export const create = async (req, res) => {
  try {
    const s3 = new aws.S3({
      signatureVersion: 'v4'
    })

    const fileName = req.query['file-name']
    const fileType = req.query['file-type']
    const s3Params = {
      Bucket: process.env.AWS_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    }

    const data = await s3.getSignedUrl('putObject', s3Params)

    const returnData = {
      signedRequest: data,
      url: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/${fileName}`
    }
    res.status(200).send(returnData)
  } catch (err) {
    res.status(400).send(err)
  }
}
