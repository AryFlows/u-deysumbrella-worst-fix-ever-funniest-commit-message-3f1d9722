# Frost Retry Loop — Worst Fix Ever

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/AryFlows/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/AryFlows/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

One commit message for a bug fix that made everything worse, entered in the
[Worst Fix Ever: Funniest Commit Message](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) bounty on make.fun.

## Entry

> `fix: retry loop, now it retries until the heat death of the universe`

The retry loop was hammering a dead service. The "fix" kept the retry and
removed the backoff cap — so now it retries forever.

## Run

```sh
node main.ts
```

Writes the entry to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
Node 22, stdlib only.
