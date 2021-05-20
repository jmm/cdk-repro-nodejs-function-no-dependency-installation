# Repro

```
npm install
npm run cdk synth StackA
```

# Expected Result

Synthesis succeeds.

# Actual Result

Synthesis fails because dependencies of the NodejsFunction aren't installed.
